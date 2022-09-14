using System;

class Program
{

    static void Main(string[]args)
    {
        int n;

        Console.WriteLine("Informe o número");

        n = int.Parse(Console.ReadLine());

        Console.WriteLine($"Seu número é: {n}, o antecesor é {n - 1} e o sucessor é {n  + 1}");
    }

}