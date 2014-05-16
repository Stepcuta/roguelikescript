function Update () {
    transform.Translate(transform.forward);
}
 
function OnCollisionEnter (c : Collision) {
    if(c.collider.CompareTag("Player"))
        c.collider.gameObject.GetComponent(Health).Damage();
 
    Destroy(gameObject);
}