using System;

class TabelasVerdade {
    static void Main() {
        MostrarTabelaAnd();
        MostrarTabelaOr();
    }

    static void MostrarTabelaAnd() {
        Console.WriteLine("Tabela Verdade para P E Q (AND):");
        Console.WriteLine("P | Q | P E Q");
        Console.WriteLine("--|---|-----");
        for (int p = 0; p <= 1; p++) {
            for (int q = 0; q <= 1; q++) {
                bool resultado = p == 1 && q == 1;
                Console.WriteLine($"{p} | {q} | {resultado}");
            }
        }
        Console.WriteLine();
    }

    static void MostrarTabelaOr() {
        Console.WriteLine("Tabela Verdade para P OU Q (OR):");
        Console.WriteLine("P | Q | P OU Q");
        Console.WriteLine("--|---|------");
        for (int p = 0; p <= 1; p++) {
            for (int q = 0; q <= 1; q++) {
                bool resultado = p == 1 || q == 1;
                Console.WriteLine($"{p} | {q} | {resultado}");
            }
        }
        Console.WriteLine();
    }
}
