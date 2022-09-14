using System;

class Program
{

    static void Main(string[]args)
    {
        Random aleatorio = new Random();
        int valor = aleatorio.Next(0,100);
        Console.WriteLine($"O valor foi: {valor}");
    }

}