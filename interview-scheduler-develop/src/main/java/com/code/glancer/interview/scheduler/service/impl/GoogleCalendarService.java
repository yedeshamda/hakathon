//package com.code.glancer.interview.scheduler.service.impl;
//
//import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
//import com.google.api.client.http.HttpRequestInitializer;
//import com.google.api.client.http.javanet.NetHttpTransport;
//import com.google.api.client.json.JsonFactory;
//import com.google.api.client.json.jackson2.JacksonFactory;
//import com.google.api.client.util.DateTime;
//import com.google.api.services.calendar.Calendar;
//import com.google.api.services.calendar.model.*;
//import com.google.auth.http.HttpCredentialsAdapter;
//import com.google.auth.oauth2.GoogleCredentials;
//
//import java.io.*;
//import java.security.GeneralSecurityException;
//import java.util.Collections;
//import java.util.UUID;
//import java.util.logging.Logger;
//
//public class GoogleCalendarService {
//
//    private static final String APPLICATION_NAME = "feedbackB2B";
//    private static final String CALENDAR_ID = "primary";
//
//    private final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
//    private final NetHttpTransport httpTransport;
//    private static final Logger LOGGER = Logger.getLogger(GoogleCalendarService.class.getName());
//
//    public GoogleCalendarService() throws IOException, GeneralSecurityException {
//        this.httpTransport = GoogleNetHttpTransport.newTrustedTransport();
//    }
//    private String generateIndependentMeetLink() {
//        // Génère un lien Meet indépendant avec une chaîne aléatoire pour l'ID de la réunion
//        String randomId = generateRandomId();
//        return "https://meet.google.com/new?hs=" + randomId;
//    }
//
//    private String generateRandomId() {
//        // Génère une chaîne aléatoire unique (par exemple, UUID) et la formate correctement
//        String uuid = UUID.randomUUID().toString();
//        // Supprime les tirets pour correspondre au format xxx-xxxx-xxx
//        return uuid.replace("-", "").substring(0, 11);
//    }
//
//
//
//    public String createEventAndGetMeetLink(String summary, String description, DateTime startDateTime, DateTime endDateTime) throws IOException {
//        Calendar service = new Calendar.Builder(httpTransport, JSON_FACTORY, getHttpRequestInitializer())
//                .setApplicationName(APPLICATION_NAME)
//                .build();
//
//        Event event = new Event()
//                .setSummary(summary)
//                .setDescription(description);
//
//        EventDateTime start = new EventDateTime()
//                .setDateTime(startDateTime)
//                .setTimeZone("UTC");
//        event.setStart(start);
//
//        EventDateTime end = new EventDateTime()
//                .setDateTime(endDateTime)
//                .setTimeZone("UTC");
//        event.setEnd(end);
//        //event.setHangoutLink("https://meet.google.com/ots-pjpf-mzg");
//        ConferenceData conferenceData = new ConferenceData();
//
//        CreateConferenceRequest createConferenceRequest = new CreateConferenceRequest();
//        createConferenceRequest.setRequestId("uniqueRequestId");
//
//// Utilisez la méthode fournie par l'API pour créer la solution de conférence
//        createConferenceRequest.setConferenceSolutionKey(
//                new ConferenceSolutionKey().setType("hangoutsMeet")
//        );
//
//        conferenceData.setCreateRequest(createConferenceRequest);
//        event.setConferenceData(conferenceData);
//
//        // Après avoir configuré l'événement, associe le lien Meet indépendant
//        String meetLink = generateIndependentMeetLink();
//        event.setDescription("Lien Meet : " + meetLink);
//        System.out.println("lm"+meetLink);
//
//        try {
//            // Insertion de l'événement dans le calendrier
//            event = service.events().insert(CALENDAR_ID, event).execute();
//            System.out.println("L'événement a été inséré avec succès.");
//
//            // Ajout d'un délai court
//            Thread.sleep(2000);
//
//            // Récupération de la conferenceData de l'événement
//            ConferenceData conferenceData1 = event.getConferenceData();
//            if (conferenceData1 != null) {
//                System.out.println("La conférence a été créée avec succès. ID : " + conferenceData1.getConferenceId());
//            } else {
//                System.out.println("La conferenceData est null");
//            }
//
//            // Retourne le lien Meet
//            return meetLink;
//        } catch (Exception e) {
//            // Gestion des erreurs
//            e.printStackTrace();
//            return null;
//        }
//
//    }
//
//    private String generateMeetLink(Calendar service, String eventId) throws IOException {
//        Event updatedEvent = service.events().get(CALENDAR_ID, eventId).execute();
//
//        ConferenceData conferenceData = updatedEvent.getConferenceData();
//        if (conferenceData != null && conferenceData.getEntryPoints() != null && !conferenceData.getEntryPoints().isEmpty()) {
//            for (EntryPoint entryPoint : conferenceData.getEntryPoints()) {
//                if ("video".equals(entryPoint.getEntryPointType())) {
//                    return entryPoint.getUri();
//                }
//            }
//        }
//
//        return null;
//    }
//
//
//    // Méthode pour obtenir les informations d'identification de l'utilisateur (à implémenter)
//    private HttpRequestInitializer getHttpRequestInitializer() throws IOException {
//        File file = new File("src/main/resources/credentials.json");
//        System.out.println("Chemin absolu du fichier : " + file.getAbsolutePath());
//        if (!file.exists()) {
//            System.out.println("Le fichier n'existe pas !");
//        }
//
//        try (InputStream in = new FileInputStream("src/main/resources/credentials.json")) {
//            if (in == null) {
//                throw new FileNotFoundException("Le fichier credentials.json n'a pas été trouvé.");
//            }
//
//            GoogleCredentials credentials = GoogleCredentials.fromStream(in)
//                    .createScoped(Collections.singleton("https://www.googleapis.com/auth/calendar"));
//
//            return new HttpCredentialsAdapter(credentials);
//        }
//    }
//
//
//}
