#pragma strict
var damage = 1;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider)
{
	Debug.Log("bat collision");
	if(other.gameObject.tag == "Arrow2")
		{
			Debug.Log("killed");
 
			Destroy (this.gameObject);
		}
	if(other.gameObject.tag == "Player")
		{
		other.collider.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver );
		}
}
