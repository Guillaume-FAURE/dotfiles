fun happyBirthday(name: String): String {
    println("test2")
    val nameGreeting = "Happy Birthday, $name!"
    val ageGreeting = "You are now 5 years old!"
    return "$nameGreeting\n$ageGreeting"
}


println("test")
println(happyBirthday("Romain"))
