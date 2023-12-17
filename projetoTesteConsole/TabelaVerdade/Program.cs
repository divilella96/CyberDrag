using System;

class TabelasVerdade {
    static void Main() {
        MostrarTabelaAnd();
        MostrarTabelaOr();
        MostrarTabelaNot();
        MostrarTabelaXor();
    }

    static void MostrarTabelaAnd() {
	Console.WriteLine('\n');
	Console.WriteLine("(lido como 'P e Q e R'). É verdadeira somente se");
	Console.WriteLine("ambas as proposições P e Q forem verdadeiras.");
        Console.WriteLine("Tabela Verdade para P ^ Q ^ R (AND):");
        Console.WriteLine("P | Q | R | P ^ Q ^ R");
        Console.WriteLine("--|---|---|------------");
        for (int p = 0; p <= 1; p++) {
            for (int q = 0; q <= 1; q++) {
                for (int r = 0; r <= 1; r++) {
                    bool resultado = p == 1 && q == 1 && r == 1;
                    Console.WriteLine($"{p} | {q} | {r} | {resultado}");
                }
            }
        }
        Console.WriteLine();
    }

    static void MostrarTabelaOr() {
        Console.WriteLine("Tabela Verdade para P OU Q OU R (OR):");
        Console.WriteLine("P | Q | R | P OU Q OU R");
        Console.WriteLine("--|---|---|-------------");
        for (int p = 0; p <= 1; p++) {
            for (int q = 0; q <= 1; q++) {
                for (int r = 0; r <= 1; r++) {
                    bool resultado = p == 1 || q == 1 || r == 1;
                    Console.WriteLine($"{p} | {q} | {r} | {resultado}");
                }
            }
        }
        Console.WriteLine();
    }

    static void MostrarTabelaNot() {
        Console.WriteLine("Tabela Verdade para NÃO P:");
        Console.WriteLine("P | ~P");
        Console.WriteLine("--|---");
        for (int p = 0; p <= 1; p++) {
            bool resultado = p == 0;
            Console.WriteLine($"{p} | {resultado}");
        }
        Console.WriteLine();
    }

    static void MostrarTabelaXor() {
        Console.WriteLine("Tabela Verdade para P XOR Q:");
        Console.WriteLine("P | Q | P XOR Q");
        Console.WriteLine("--|---|---------");
        for (int p = 0; p <= 1; p++) {
            for (int q = 0; q <= 1; q++) {
                bool resultado = p != q;
                Console.WriteLine($"{p} | {q} | {resultado}");
            }
        }
        Console.WriteLine();
    }
}
