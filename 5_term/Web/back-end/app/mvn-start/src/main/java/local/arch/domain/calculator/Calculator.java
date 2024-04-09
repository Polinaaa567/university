package local.arch.domain.calculator;

import local.arch.domain.ICalculator;

public class Calculator implements ICalculator {

    @Override
    public double sumUp(double number_1, double number_2) {
        return number_1 + number_2;
    }
}