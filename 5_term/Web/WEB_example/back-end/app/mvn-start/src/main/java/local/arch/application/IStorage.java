package local.arch.application;


public interface IStorage {	
    //String[] reStoreGreetings();

	void storeNumbers(double[] numbers);
	public boolean findUser(String login, String password);
	double[] reStoreNumbers();
}
