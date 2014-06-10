public var spitSpeed : float = 6000;
public var spit : GameObject;
var LookAtTarget : Transform;
var nextShotTime : float = 0.0;
var timeBetweenShots : float = 2.0;
var damp : float = 6;
var spitting : AudioClip;

function Update()
{
	if(LookAtTarget)
	{
		//var rotate = Quaternion.LookRotation(LookAtTarget.position - transform.position);
		//transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp);

		if (nextShotTime <= Time.time)
		{
			Shoot();
			nextShotTime = Time.time + timeBetweenShots;
		}
	}
}

function Shoot(){
		var spit = Instantiate(spit, transform.position + Vector2(0, 0.6), Quaternion.identity);
    spit.rigidbody.AddForce(transform.forward * spitSpeed);
    Destroy(spit, Random.Range(0.4, 1));
		//audio.PlayOneShot(vomit);
}