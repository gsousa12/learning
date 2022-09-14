using System;
using System.Text;

namespace geradorDeSenha
{
    
    internal class Program
    {
        static void Main(string[] args) {
            int i,n = 10;

            String caracteresPossiveis = 
                "abcdefghijklmnopqrstuvwxyzç" 
                + "abcdefghijklmnopqrstuvwxyzç".ToUpper() 
                + "0123456789" 
                + "@!#$%&";

            Random sorteio = new Random();
            StringBuilder password = new StringBuilder();

            for(i = 0; i < n; i++) {

                int numeroSorteado = sorteio.Next(0, caracteresPossiveis.Length - 1);
                password.Append(caracteresPossiveis[numeroSorteado]);

            }

            Console.WriteLine(password + "\n");
        }
    }

}
