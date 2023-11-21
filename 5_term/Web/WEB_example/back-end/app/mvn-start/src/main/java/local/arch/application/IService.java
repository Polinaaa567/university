package local.arch.application;

import java.util.Map;

public interface IService {
	public String calculation(double a, double b);

	public String check(String login, String password);

	public boolean validateToken(String token);

	public Map<String, String> getUserInfo(String token);
	
}
