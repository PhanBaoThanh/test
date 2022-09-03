package Main;

public class Team {
	private String name;
	private int win_rate;
	
	Team(String name, int win_rate) {
		super();
		this.name = name;
		this.win_rate = win_rate;
	}
	
	Team() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getWin_rate() {
		return win_rate;
	}
	
	public void setWin_rate(int win_rate) {
		this.win_rate = win_rate;
	}
}
