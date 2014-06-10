var damage = 1;

function OnCollisionEnter ( collisionInfo ) {
	Debug.Log("spit collision");
	collisionInfo.other.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver );

}