package com.deshpande.abhishek;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



/*
*
* Create object of TeemPatti Class
* Call getWinner method to get winner
*
*
* Inputs are set for test case goven with the problem statement
*
*
*
* */

public class TeenPatti {

    int[][] grid = new int[4][13];
    int[][] playersData = new int[5][6];

    public TeenPatti() {
        prepareData();
    }

    private void prepareData() {

        //prepare player data

        //player card numbers : 12,23,45
        playersData[0][0] = 0;
        playersData[0][1] = 12;
        playersData[0][2] = 1;
        playersData[0][3] = 10;
        playersData[0][4] = 3;
        playersData[0][5] = 6;

        //player card numbers : 0,32,50
        playersData[1][0] = 0;
        playersData[1][1] = 0;
        playersData[1][2] = 2;
        playersData[1][3] = 6;
        playersData[1][4] = 3;
        playersData[1][5] = 11;

        //player card numbers 25,6,17
        playersData[2][0] = 1;
        playersData[2][1] = 12;
        playersData[2][2] = 0;
        playersData[2][3] = 6;
        playersData[2][4] = 1;
        playersData[2][5] = 4;

        //player card numbers : 22,33,44
        playersData[3][0] = 1;
        playersData[3][1] = 9;
        playersData[3][2] = 2;
        playersData[3][3] = 7;
        playersData[3][4] = 3;
        playersData[3][5] = 5;

        //player card numbers : 43,49,16
        playersData[4][0] = 3;
        playersData[4][1] = 4;
        playersData[4][2] = 3;
        playersData[4][3] = 10;
        playersData[4][4] = 1;
        playersData[4][5] = 3;


        //prepare Grid
        grid[0][12] = 1;
        grid[1][10] = 1;
        grid[3][6] = 1;

        grid[0][0] = 2;
        grid[2][6] = 2;
        grid[3][11] = 2;

        grid[1][12] = 3;
        grid[0][6] = 3;
        grid[1][4] = 3;

        grid[1][9] = 4;
        grid[2][7] = 4;
        grid[3][5] = 4;

        grid[3][4] = 5;
        grid[3][10] = 5;
        grid[1][3] = 5;


        /*
        *
        * playerData : a 2D array to save index of cards of each player
        *
        *   format of playerData matrix
        *
        *   for each player : index i,j for 1st card, 2nd card, 3rd card
        *
        *
        * */
    }

    private void printGrid() {
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                System.out.print(grid[i][j] + " ");
            }
            System.out.println("");
        }
    }

    private void printPlayerData() {
        System.out.println("");
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 6; j++) {
                System.out.print(playersData[i][j] + "\t");
            }
            System.out.println("");
        }
    }

    public void getWinner() {

        List<Integer> trailPlayers = getTrails();
        if (!trailPlayers.isEmpty()) {
            //there are trials

            if (trailPlayers.size() == 1) {
                printWinner(trailPlayers.get(0));
            }else {

                int highCard = -1;
                int highCardPlayerIndex = -1;

                for (int i=0;i<trailPlayers.size();i++){
                    if (playersData[trailPlayers.get(i)][1]  == 0){
                        printWinner(trailPlayers.get(i));
                    }else {
                        if (playersData[trailPlayers.get(i)][1] > highCard){
                            highCard = playersData[trailPlayers.get(i)][1];
                            highCardPlayerIndex = i;
                        }
                    }
                }

                printWinner(highCardPlayerIndex);
            }
            return;
        }



        List<Integer> sequencePlayers = getSameColorSequences();
        //pure sequences
        if (!sequencePlayers.isEmpty()) {

            List<Integer> pureSequencePlayers = getPureSequences(sequencePlayers);
            if (!pureSequencePlayers.isEmpty()) {

                //there are pure sequences
                for (int i=0;i<pureSequencePlayers.size();i++){

                }

                return;
            }
        }

        //impure sequences
        List<Integer> impureSequencePlayers = getImpureSequences();
        if (!impureSequencePlayers.isEmpty()) {

        }


        //same color players
        if (!sequencePlayers.isEmpty()) {
            //there are same color players

            return;
        }

        //get pair players
        List<Integer> pairPlayers = getPairPlayers();
        if (!pairPlayers.isEmpty()) {
            //there are pair players
            return;
        }


        //get High Card
    }

    private List<Integer> getPairPlayers() {
        List<Integer> pairPlayers = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            if (playersData[i][1] == playersData[i][3] || playersData[i][3] == playersData[i][5] || playersData[i][1] == playersData[i][5]) {
                pairPlayers.add(i);
            }
        }

        return pairPlayers;
    }

    private List<Integer> getImpureSequences() {
        List<Integer> impureSequencePlayers = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            int[] temp = new int[3];
            temp[0] = playersData[i][1];
            temp[1] = playersData[i][3];
            temp[2] = playersData[i][5];

            Arrays.sort(temp);
            if (temp[1] == temp[0] + 1 && temp[2] == temp[1] + 1) {
                impureSequencePlayers.add(i);
            }

        }

        return impureSequencePlayers;
    }

    private List<Integer> getPureSequences(List<Integer> list) {
        List<Integer> pureSequencePlayers = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            if (list.contains(i)) {
                int[] temp = new int[3];
                temp[0] = playersData[i][0];
                temp[1] = playersData[i][2];
                temp[2] = playersData[i][4];

                Arrays.sort(temp);
                if (temp[1] == temp[0] + 1 && temp[2] == temp[1] + 1) {
                    pureSequencePlayers.add(i);
                }
            }
        }

        return pureSequencePlayers;
    }

    private List<Integer> getSameColorSequences() {
        List<Integer> sameColorPlayers = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            if (playersData[i][0] == playersData[i][2] && playersData[i][2] == playersData[i][4]) {
                sameColorPlayers.add(i);
            }
        }

        return sameColorPlayers;
    }

    private List<Integer> getTrails() {
        List<Integer> trailPlayers = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            if (playersData[i][1] == playersData[i][3] && playersData[i][3] == playersData[i][5]) {
                trailPlayers.add(i);
            }
        }
        return trailPlayers;
    }


    private void printWinner(int index) {
        System.out.println("Winner is player : " + index + 1);
    }
}
