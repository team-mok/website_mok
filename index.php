<?php
class Member {
    private $name;
    private $role;
    
    public function __construct($name,$role) {
        $this->name = $name;
        $this->role = $role;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function getRole() {
        return $this->role;
    }
    
}

$members[] = new Member(mori,backend);
$members[] = new Member(oga,frontend);
$members[] = new Member(kimu,drug);


foreach($members as $member) {
    echo "<p>".$member->getName()."です。".$member->getRole()."やってます。</p>\n";
}