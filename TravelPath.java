package com.deshpande.abhishek;

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;


// Create object of this class
// Call findOptimalAssignment method to get answer

//Currently algorithm works for data given for the case in the problem statement

// custom input can be given to algorithm using getData() method
// Give Input as size of matrix and data values of the matrix


public class TravelPath {

    private Scanner scanner;

    private int[][] data;
    private int length;
    private int[] selectionInRow, selectionInCol, rowsCovered, colsCovered, staredZeroesInRow;


    private void getData() {

        //Use this method to get matrix data from command line

        scanner = new Scanner(System.in);
        System.out.println("Enter size of (n*n) matrix :");
        int n = scanner.nextInt();
        length = n;

        System.out.println("Enter Data of Matrix : ");

        data = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                data[i][j] = scanner.nextInt();
            }
        }
    }

    private void getDataProvidedInQuestion() {
        length = 3;
        data = new int[3][3];

        data[0][0] = 2500;
        data[0][1] = 4000;
        data[0][2] = 3500;

        data[1][0] = 4000;
        data[1][1] = 6000;
        data[1][2] = 3500;

        data[2][0] = 2000;
        data[2][1] = 4000;
        data[2][2] = 2500;
    }


    public TravelPath() {

        //getData();
        getDataProvidedInQuestion();

        selectionInRow = new int[length];
        selectionInCol = new int[length];
        rowsCovered = new int[length];
        colsCovered = new int[length];
        staredZeroesInRow = new int[length];

        Arrays.fill(staredZeroesInRow, -1);
        Arrays.fill(selectionInRow, -1);
        Arrays.fill(selectionInCol, -1);
    }

    private void printOutput(int[][] answer) {

        System.out.println("\ncells which will give minimum travel cost are : \n");

        for (int i = 0; i < length; i++) {
            System.out.println("row : " + answer[i][1] + " col : " + answer[i][0]);
        }
    }

    public int[][] findOptimalAssignment() {

        stepOne();
        stepTwo();
        stepThree();

        while (!allColumnsAreCovered()) {
            int[] mainZero = stepFour();
            while (mainZero == null) {
                stepSeven();
                mainZero = stepFour();
            }
            if (selectionInRow[mainZero[0]] == -1) {
                stepSix(mainZero);
                stepThree();
            } else {
                rowsCovered[mainZero[0]] = 1;
                colsCovered[selectionInRow[mainZero[0]]] = 0;
                stepSeven();
            }
        }

        int[][] optimalAssignment = new int[length][];
        for (int i = 0; i < selectionInCol.length; i++) {
            optimalAssignment[i] = new int[]{i, selectionInCol[i]};
        }

        printOutput(optimalAssignment);

        return optimalAssignment;
    }


    private boolean allColumnsAreCovered() {
        for (int i : colsCovered) {
            if (i == 0) {
                return false;
            }
        }
        return true;
    }

    private void stepOne() {

        for (int i = 0; i < length; i++) {
            int minValue = Integer.MAX_VALUE;
            for (int j = 0; j < data[i].length; j++) {
                if (data[i][j] < minValue) {
                    minValue = data[i][j];
                }
            }

            for (int j = 0; j < data[i].length; j++) {
                data[i][j] -= minValue;
            }
        }

        for (int i = 0; i < data[0].length; i++) {
            int minValue = Integer.MAX_VALUE;
            for (int j = 0; j < length; j++) {
                if (data[j][i] < minValue) {
                    minValue = data[j][i];
                }
            }

            for (int j = 0; j < length; j++) {
                data[j][i] -= minValue;
            }
        }
    }

    private void stepTwo() {
        int[] rowHasSquare = new int[length];
        int[] colHasSquare = new int[length];

        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length; j++) {
                if (data[i][j] == 0 && rowHasSquare[i] == 0 && colHasSquare[j] == 0) {
                    rowHasSquare[i] = 1;
                    colHasSquare[j] = 1;
                    selectionInRow[i] = j;
                    selectionInCol[j] = i;
                    continue;
                }
            }
        }
    }

    private void stepThree() {
        for (int i = 0; i < selectionInCol.length; i++) {
            colsCovered[i] = selectionInCol[i] != -1 ? 1 : 0;
        }
    }

    private int[] stepFour() {
        for (int i = 0; i < length; i++) {
            if (rowsCovered[i] == 0) {
                for (int j = 0; j < length; j++) {
                    if (data[i][j] == 0 && colsCovered[j] == 0) {
                        staredZeroesInRow[i] = j;
                        return new int[]{i, j};
                    }
                }
            }
        }
        return null;
    }

    private void stepSix(int[] mainZero) {

        int i = mainZero[0];
        int j = mainZero[1];

        Set<int[]> K = new LinkedHashSet<>();

        K.add(mainZero);
        boolean found = false;
        do {
            if (selectionInCol[j] != -1) {
                K.add(new int[]{selectionInCol[j], j});
                found = true;
            } else {
                found = false;
            }

            if (!found) {
                break;
            }

            i = selectionInCol[j];
            j = staredZeroesInRow[i];

            if (j != -1) {
                K.add(new int[]{i, j});
                found = true;
            } else {
                found = false;
            }


        } while (found);

        for (int[] zero : K) {
            if (selectionInCol[zero[1]] == zero[0]) {
                selectionInCol[zero[1]] = -1;
                selectionInRow[zero[0]] = -1;
            }

            if (staredZeroesInRow[zero[0]] == zero[1]) {
                selectionInRow[zero[0]] = zero[1];
                selectionInCol[zero[1]] = zero[0];
            }
        }

        Arrays.fill(staredZeroesInRow, -1);
        Arrays.fill(rowsCovered, 0);
        Arrays.fill(colsCovered, 0);
    }

    private void stepSeven() {

        int minUncoveredValue = Integer.MAX_VALUE;
        for (int i = 0; i < length; i++) {
            if (rowsCovered[i] == 1) {
                continue;
            }
            for (int j = 0; j < data[0].length; j++) {
                if (colsCovered[j] == 0 && data[i][j] < minUncoveredValue) {
                    minUncoveredValue = data[i][j];
                }
            }
        }

        if (minUncoveredValue > 0) {
            for (int i = 0; i < data.length; i++) {
                for (int j = 0; j < data[0].length; j++) {
                    if (rowsCovered[i] == 1 && colsCovered[j] == 1) {

                        data[i][j] += minUncoveredValue;
                    } else if (rowsCovered[i] == 0 && colsCovered[j] == 0) {

                        data[i][j] -= minUncoveredValue;
                    }
                }
            }
        }
    }

}
