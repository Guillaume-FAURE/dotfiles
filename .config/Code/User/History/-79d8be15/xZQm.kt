fun happyBirthday(name: String): String {
    val nameGreeting = "Happy Birthday, Rover!"
    val ageGreeting = "You are now 5 years old!"
    return "$nameGreeting\n$ageGreeting"
}


fun main() {
    println("test")
    println(happyBirthday("Romain"))
}
