package com.code.glancer.interview.scheduler.service;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

@Component
@Slf4j
public class BadWords {
        public static boolean verfiyWord(String contents) throws IOException {


           String file ="word.txt";

            try (Scanner scanner = new Scanner(new File(file))) {

                while (scanner.hasNext()) {
                    String line = scanner.nextLine();
                    String[] words = contents.split(" ");
                    for (String w : words) {
                        if (line.toUpperCase().contains(w.toUpperCase()))
                        {
                            log.info("bad word");
                            return true;
                        }
                    }
                }
            }
            return false;

        }}

