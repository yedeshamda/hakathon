import mysql.connector
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Connexion à la base de données des entreprises
conn_entreprises = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="hakhaton"
)
cursor_entreprises = conn_entreprises.cursor()

# Récupération des données de la table peopleandcompanies
cursor_entreprises.execute("SELECT id, nom, categorie, ville FROM peopleandcompanies")
data_entreprises = cursor_entreprises.fetchall()

# Fermeture de la connexion à la base de données des entreprises
cursor_entreprises.close()
conn_entreprises.close()

# Connexion à la base de données des besoins
conn_besoins = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="bizmatchidentbesoin"
)
cursor_besoins = conn_besoins.cursor()

# Récupération des données de la table besoin
cursor_besoins.execute("SELECT id_besoin, type_de_besoin FROM besoin")
data_besoins = cursor_besoins.fetchall()

# Fermeture de la connexion à la base de données des besoins
cursor_besoins.close()
conn_besoins.close()

# Création de documents texte pour chaque entreprise et besoin
documents_entreprises = [f"{categorie} {ville}" for _, _, categorie, ville in data_entreprises]
documents_besoins = [type_de_besoin for _, type_de_besoin in data_besoins]
print(f"Types de Besoins: {documents_besoins}")

# Vectorisation des données
vectorizer = CountVectorizer().fit_transform(documents_entreprises + documents_besoins)
similarity_matrix = cosine_similarity(vectorizer)

# Dictionnaire pour stocker les résultats
results_by_besoin = {}

# Exemple d'utilisation pour chaque besoin
seuil_de_similarite = 0.7  # Définissez votre propre seuil

# Initialiser une liste pour stocker les suggestions à insérer dans la nouvelle table
suggestions_to_insert = []

# Connexion à la base de données pour insérer les suggestions dans la nouvelle table
conn_suggestions = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="bizmatchidentbesoin"  # Remplacez par le nom de votre base de données pour les suggestions
)
cursor_suggestions = conn_suggestions.cursor()

# Supprimer la table existante s'il y en a une
drop_table_query = "DROP TABLE IF EXISTS colleguesuggestions"
cursor_suggestions.execute(drop_table_query)
conn_suggestions.commit()

# Créer la nouvelle table
create_table_query = """
    CREATE TABLE colleguesuggestions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_entreprise INT,
        nom_entreprise VARCHAR(255),
        type_de_besoin VARCHAR(255),
        ville_entreprise VARCHAR(255),
        similarity FLOAT
    )
"""
cursor_suggestions.execute(create_table_query)
conn_suggestions.commit()

for i, type_de_besoin in enumerate(data_besoins):
    matching_enterprises = []

    for j, (_, _, categorie_entreprise, ville_entreprise) in enumerate(data_entreprises):
        similarity = similarity_matrix[j][len(data_entreprises) + i]

        if similarity > seuil_de_similarite:
            matching_enterprises.append((data_entreprises[j][0], data_entreprises[j][1], categorie_entreprise, ville_entreprise, similarity))

    # Stocker les résultats pour chaque type de besoin
    results_by_besoin[type_de_besoin[1]] = matching_enterprises

    # Ajouter les suggestions à la liste pour insertion dans la nouvelle table
    for id_entreprise, nom_entreprise, categorie_entreprise, ville_entreprise, similarity in matching_enterprises:
        suggestions_to_insert.append((id_entreprise, nom_entreprise, type_de_besoin[1], ville_entreprise, similarity))

# Insérer les suggestions dans la nouvelle table
insert_query = "INSERT INTO companiessuggestions (id_entreprise, nom_entreprise, type_de_besoin, ville_entreprise, similarity) VALUES (%s, %s, %s, %s, %s)"
cursor_suggestions.executemany(insert_query, suggestions_to_insert)
conn_suggestions.commit()

# Fermeture de la connexion à la base de données pour les suggestions
cursor_suggestions.close()
conn_suggestions.close()

# Afficher les résultats pour chaque type de besoin
for type_de_besoin, matching_enterprises in results_by_besoin.items():
    print(f"Type de Besoin: {type_de_besoin}")
    print("collegue correspondantes:")
    for id_entreprise, nom_entreprise, categorie_entreprise, ville_entreprise, similarity in matching_enterprises:
        print(f"  - ID Entreprise: {id_entreprise}, Nom Entreprise: {nom_entreprise}, Categorie: {categorie_entreprise}, Ville: {ville_entreprise}, Similarity: {similarity:.2f}")
    print("\n")
