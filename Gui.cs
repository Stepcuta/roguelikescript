using UnityEngine;
using System.Collections;

public class PlayerHealth : MonoBehaviour {
	
	public int maxHealth = 3;//The max health of the player.
	public int curHealth = 3;// The current health of the player this number will be altered by the code to respond with damage and health packs.
	
	public float healthBarLength;//The length of the health bar.
	
	
	public Texture2D background; // Allows you to place a textuer in, in the Inspector
	
	
	public Texture2D foreground;//Allows you to place a texture in, in th;e inspector
	
	public Texture2D lion;//Allows you to place a texture in, in th;e inspector
	
	
	
	
	void Start () // Use this for initialization, when the game stats what is displayed here will be loaded.
	{
		healthBarLength = Screen.width /2; // The healthBarLength will be 1/2 the screens width.
	}
	
	
	void Update () // Update is called once per frame, to update information we are sending and receving.
	{
		AddjustCurrentHealth(0); // Calls appon AddjustCurHealth function to update the health.
	}
	
	void OnGUI()// set up for working with items in the GUI
	{
		GUI.DrawTexture(new Rect(30, 10,Screen.width/5, 20), background);
		
		GUI.DrawTexture(new Rect(10, 10,Screen.width/5, 20), lion);
		
		GUI.DrawTexture(new Rect(30, 10, healthBarLength, 20), foreground,ScaleMode.StretchToFill);
		
	}
	
	public void AddjustCurrentHealth(int adj)//This function will allows us to alter our current health outside this script.
	{
		
		curHealth += adj;//This is to recieve heals or dammage to the CurHealth.  The number is passed in then assigned to curHealth.
		
		if(curHealth < 0)//Checks if the players health has gone below 0.
			curHealth = 0;// If players health has gone below 0 set it to 0.
		
		if(curHealth> maxHealth)//Checks if player health is higher then maxHealth.
			curHealth = maxHealth;//If players health is higher then maxHealth set it = to maxHeatlh
		
		if(maxHealth <1)//Checks if maxHealth is set to less then 1.
			maxHealth = 1;//If maxHealth is set below 1, this sets it to 1.
		
		healthBarLength = (Screen.width /5) * (curHealth / (float)maxHealth); // The full length of the bar * % of cur health.
		
	}
	
}
