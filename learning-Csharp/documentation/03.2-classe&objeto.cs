/*

As classes são os tipos do C# mais fundamentais.

Uma classe é uma estrutura de dados que combina em ações e campos em uma
única unidade. 

Uma classe fornece uma definição de instâncias de  classe que são os objetos.

As classes dão suporte à Herança e Polimorfismo.

Novas classes são criadas usando declarações de classe que começa com um cabeçalho.

O cabeçalho especifica:
* Os atributos e modificadores da classe.
* O nome da classe.
* A classe base.
* As interfaces implementadas. 

*/

// O código a seguir mostra uma declaração de uma classe simples chamada Point :

public class Point
{
    public int X { get; }
    public int Y { get; }
    
    public Point(int x, int y) => (X, Y) = (x, y);
}

// Instâncias de classe são criadas usando o operador new (aloca a memória para uma nova instância)

// As instruções a seguir criam dois objetos Point 
// e armazenam referências a esses objetos em duas variáveis:

var p1 = new Point(0, 0);
var p2 = new Point(10, 20);

