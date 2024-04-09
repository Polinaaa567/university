package local.arch.application.service;

import java.util.Map;

import local.arch.application.IService;
import local.arch.application.IStorage;
import local.arch.application.IStorageUsing;
import local.arch.domain.Factory;
import local.arch.domain.ICalculator;
import local.arch.infrastructure.token.ITokenKey;

public class Service implements IService, IStorageUsing, TokenManagerInjection {

  ITokenKey usedManager;
  IStorage storage;

  @Override
  public String calculate(double number_1, double number_2) {


    ICalculator calculator = Factory.createCalculator();
    double sum = 0;

    sum = calculator.sumUp(number_1, number_2);
    
    this.storage.storeNumbers(number_1, number_2);

    return String.format("%s", sum);
  }

  @Override
  public String check(String login, String password) {
    String token = this.usedManager.generateToken(login, password);
    return this.usedManager.validateToken(token) ? token : "BAD";
  }

  @Override
  public void useStorage(IStorage storage) {
    this.storage = storage;
  }

  @Override
  public void injectTokenManager(ITokenKey manager) {
    usedManager = manager;
  }

  @Override
  public Map<String, String> getUserInfo(String token) {
    return usedManager.getTokenInfo(token);
  }
}