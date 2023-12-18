using System;

class Program {
    static void Main() {
        try {
            Console.Write("Digite um número inteiro: ");
            int numero = int.Parse(Console.ReadLine());

            if (numero % 2 == 0) {
                Console.WriteLine($"O número {numero} é par.");
            } else {
                Console.WriteLine($"O número {numero} é ímpar.");
            }
        } catch (FormatException) {
            Console.WriteLine("Por favor, insira um número inteiro válido.");
        }
    }
}
