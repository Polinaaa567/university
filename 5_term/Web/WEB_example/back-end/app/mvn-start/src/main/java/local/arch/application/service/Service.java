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
  public String calculation(double a, double b) {

    double[] numbers = { a, b };

    ICalculator calculator = Factory.createCalculator();
    double sum = 0;

    sum = calculator.sum(numbers[0], numbers[1]);
    System.out.println(sum);

    return String.format("%s", sum);
  }

  @Override
  public String check(String login, String password) {
    String token = this.usedManager.generateToken(login, password);
    return validateToken(token) ? token : "BAD";
  }

  @Override
  public void useStorage(IStorage storage) {
    this.storage = storage;
  }

  @Override
  public void injectTokenManager(ITokenKey manager) {
    this.usedManager = manager;
  }

  @Override
  public boolean validateToken(String token) {
    Map<String, String> tokenInfo = this.usedManager.getTokenInfo(token);

    return this.storage.findUser(tokenInfo.get("username"), tokenInfo.get("passwd"));
  }

  @Override
  public Map<String, String> getUserInfo(String token) {
    return this.usedManager.getTokenInfo(token);
  }
}