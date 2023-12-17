package com.code.glancer.interview.scheduler.service.impl;

import com.code.glancer.interview.scheduler.domain.MatchingSystem;
import com.code.glancer.interview.scheduler.repository.MatchSuggestion;
import com.code.glancer.interview.scheduler.service.MatchService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class MatchServiceImpl implements MatchService {
    private MatchSuggestion matchSuggestion;

    @Override
    public List<MatchingSystem> getMatch() {
        System.out.println("matchawi");

        // Spécifiez le nombre d'éléments à récupérer (10 dans ce cas)
        int limit = 10;

        // Utilisez la méthode personnalisée pour récupérer 10 éléments au hasard
        List<MatchingSystem> matchingSystems = matchSuggestion.findRandomMatches(limit);

        return matchingSystems;
    }



   // @Scheduled(fixedRate = 50000)
    public void executePythonScript() {
        try {
            // Obtient le chemin absolu du répertoire de travail
            Path currentWorkingDirectory = Paths.get("").toAbsolutePath();

            // Concatène le chemin absolu avec le chemin relatif du script Python
            Path scriptPath = currentWorkingDirectory.resolve("src/main/resources/final.py");

            // Redirige la sortie standard et la sortie d'erreur vers des fichiers
            Process process = new ProcessBuilder("C:/Users/hamda/AppData/Local/Programs/Python/Python311/python.exe", scriptPath.toString())
                    .directory(currentWorkingDirectory.toFile())
                    .redirectOutput(ProcessBuilder.Redirect.to(new File("output.txt")))
                    .redirectError(ProcessBuilder.Redirect.to(new File("error.txt")))
                    .start();

            // Attends que le processus se termine
            process.waitFor();

            System.out.println("Script Python exécuté avec succès");

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            System.err.println("Erreur lors de l'exécution du script Python : " + e.getMessage());
        }
    }
}
