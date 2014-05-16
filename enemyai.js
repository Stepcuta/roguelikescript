public var Target : Transform;    
public var Projectile : Transform;
 
public var MaximumLookDistance : float = 15;
public var MaximumAttackDistance : float = 10;
public var FollowSpeed : float = 5;
public var MinimumDistanceFromPlayer : float = 2;
var MoveSpeed = 5.0;
 
var Damping = 6.0;
public var RotationDamping : float = 6;
 
function Update ()  {
 
    var distance = Vector3.Distance(Target.position, transform.position);
 
    if(distance <= MaximumLookDistance) {
        LookAtTarget ();
 
        if(distance <= MaximumAttackDistance)
            AttackAndFollowTarget (distance);
    }   
    else
        renderer.material.color = Color.green; 
}
 
 
function LookAtTarget () {
    renderer.material.color = Color.yellow;
    var dir = Target.position - transform.position;
    dir.y = 0;
    var rotation = Quaternion.LookRotation(dir);
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}
 
 
function AttackAndFollowTarget (distance : float) {
    renderer.material.color = Color.red;
    if(distance > MinimumDistanceFromPlayer)
        transform.Translate((Target.position - transform.position).normalized * MoveSpeed * Time.deltaTime);
 
    Instantiate(Projectile, transform.position + (Target.position - transform.position).normalized, Quaternion.LookRotation(Target.position - transform.position));
}