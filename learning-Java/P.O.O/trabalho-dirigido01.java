import java.util.Scanner;

public class TD01 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		int[] D = new int[61];
		int[] E = new int[61];

<<<<<<< HEAD
		int N, M, Resposta = 0, i;
		char L;
=======
		int N, M, Resposta = 0, i; // N = numero de botas, M = medida
		char L; // Lado
>>>>>>> 7622d94d7d697d4de87151f06490f9bc9fa5d7a1

		System.out.println("Digite o número de pares: ");
		N = sc.nextInt();

<<<<<<< HEAD
		while (sc.hasNext()) {

			N = sc.nextInt();

			if (N >= 2 && N <= 10000 && N % 2 == 0) {
=======
		while (sc.hasNext()) { // método hasNext() verifica se há algum elemento (next) restante na lista.
			
			if (N >= 2 && N <= 10000 && N % 2 == 0) { // restrições
>>>>>>> 7622d94d7d697d4de87151f06490f9bc9fa5d7a1

				for (i = 0; i < N; i++) {

					M = sc.nextInt(); 	
					L = sc.next().charAt(0); 

					if (L == 'D') {

						D[M]++;

						if (E[M] > 0) {

							E[M]--;
							D[M]--;
							Resposta++;

						}

					} else {

						E[M]++;

						if (D[M] > 0) {

							D[M]--;
							E[M]--;
							Resposta++;

						}
					}

				}

				System.out.println("O número total de pares corretos de botas que podem ser formados: " + Resposta);
			}

		}

		sc.close();
	}

}
