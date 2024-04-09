package local.arch.application;

public interface IStorage {
	void storeNumbers(double number_1, double number_2);

	public boolean findUser(String login, String password);
}
