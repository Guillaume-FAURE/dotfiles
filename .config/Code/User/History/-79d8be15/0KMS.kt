

n happyBirthday(name: String): String {
    println("test2")
    val nameGreeting = "Happy Birthday, $name!"
    val ageGreeting = "You are now 5 years old!"
    return "$nameGreeting\n$ageGreeting"
}

fun main(){
    println("test")
    println(happyBirthday("Romain"))
}


