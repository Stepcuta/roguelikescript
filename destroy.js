#pragma strict
var heal = 1;
function OnTriggerEnter (other : Collider)
{
	if(other.tag == "Player")
	{
	other.collider.SendMessage("ApplyHeal", heal, SendMessageOptions.DontRequireReceiver );
		Destroy(this.gameObject);
	}
}