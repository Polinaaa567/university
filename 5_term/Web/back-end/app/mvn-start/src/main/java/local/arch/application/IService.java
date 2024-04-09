package local.arch.application;

import java.util.Map;

public interface IService {
	public String calculate(double number_1, double number_2);

	public String check(String login, String password);

	public Map<String, String> getUserInfo(String token);

}
