var maximumHealth = 10;
var health = 10;
var score = 0;
var healthGUI : GUITexture;
var healthtext : GUIText;

private var healthGUIWidth = 0.0;
private var gotHitTimer = 1.0;


function Awake () {
	healthGUIWidth = healthGUI.pixelInset.width;
	
}

function ApplyBossDamage (damage : float) {
	if (health < 0)
		return;
		
		health -= damage;
		
	if (health < 0)
		Die();
}
function ApplyHeal (heal : float) {
	if (health < 0)
		return;
		
		health += heal;
}
function Die () {
	Application.LoadLevel(0);
 }
 function Update () {
 
 
healthtext.text = health + " / " + maximumHealth;
 
 
if(health < 0 ) {
 
health = 0;
 
 
}
 
 
if(health > 10) {
 health = 10;
 
 
}
}
 
 function LateUpdate () {
 
 	UpdateGUI();
 	
 }
 
 function UpdateGUI () {
 
  var healthFraction = Mathf.Clamp01(health / maximumHealth);
  healthGUI.pixelInset.xMax = healthGUI.pixelInset.xMin + healthGUIWidth * healthFraction;
  }
  