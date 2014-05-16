public var spitSpeed : float = 6000;
public var spitPrefab : Transform;
var LookAtTarget : Transform;
var nextShotTime : float = 0.0;
var timeBetweenShots : float = 2.0;
var damp : float = 6;
var spitting : AudioClip;

function Update()
{
	if(LookAtTarget)
	{
		var rotate = Quaternion.LookRotation(LookAtTarget.position - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp);
		
		if (nextShotTime <= Time.time)
		{
			Shoot();
			nextShotTime = Time.time + timeBetweenShots;
		}
	}
}

function Shoot(){
		var spit = Instantiate(spitPrefab, transform.Find("zombiebulletspawn").position, transform.Find("zombiebulletspawn").rotation);
		spit.rigidbody.AddForce(transform.forward * spitSpeed);
		//audio.PlayOneShot(gunshot);
}