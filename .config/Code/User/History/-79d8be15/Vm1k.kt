fun happyBirthday(name: String): String{
    val sentence: String = "Happy Birthday $name" 
    println(sentence)
    return sentence
}

fun main() {
    println("test")
    println(happyBirthday("Romain"))
}
