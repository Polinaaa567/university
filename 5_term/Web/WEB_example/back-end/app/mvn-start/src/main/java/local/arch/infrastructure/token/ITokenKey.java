package local.arch.infrastructure.token;

import java.util.Map;


public interface ITokenKey {
    public String generateToken(String login, String passwd);
    public Map<String, String> getTokenInfo(String token);
}
