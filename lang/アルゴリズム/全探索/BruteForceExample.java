package アルゴリズム.全探索;

/**
 * ブルートフォース（全探索）
 */
public class BruteForceExample {

    /**
     * メインメソッド
     *
     * @param args コマンドライン引数
     */
    public static void main(String[] args) {
        int n = 3; // 探索範囲の要素数

        // 0からn-1までの組み合わせを生成する
        int[] combination = new int[n];
        generateCombination(combination, 0, n);

        // 組み合わせごとに処理を行う（ここでは表示するだけの例）
        for (int i = 0; i < Math.pow(2, n); i++) {
            for (int j = 0; j < n; j++) {
                if ((i & (1 << j)) != 0) {
                    System.out.print(combination[j] + " ");
                }
            }
            System.out.println();
        }
    }

    /**
     * 0と1の組み合わせを生成する再帰メソッド
     *
     * @param combination 組み合わせの配列
     * @param index       現在の要素のインデックス
     * @param n           探索範囲の要素数
     */
    private static void generateCombination(int[] combination, int index, int n) {
        if (index == n) {
            // 組み合わせ生成完了
            // ここでは何もしないが、必要に応じて処理を記述する
            return;
        }

        // indexの要素に0を設定して再帰呼び出し
        combination[index] = 0;
        generateCombination(combination, index + 1, n);

        // indexの要素に1を設定して再帰呼び出し
        combination[index] = 1;
        generateCombination(combination, index + 1, n);
    }
}

