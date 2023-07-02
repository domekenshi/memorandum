//エラー出て邪魔だから一応パッケージ名として記載
package アルゴリズム.クイックソート;
/**
 * クイックソート（Quick Sort）アルゴリズムを使用して配列をソート。
 */
public class QuickSort {

    /**
     * クイックソートのプログラムのエントリーポイント。
     * 
     * @param args コマンドライン引数
     */
    public static void main(String[] args) {
        int[] arr = { 9, 5, 1, 8, 3, 7, 4, 6, 2 };

        System.out.println("ソート前：");
        printArray(arr);

        quickSort(arr, 0, arr.length - 1);

        System.out.println("\nソート後：");
        printArray(arr);
    }

    /**
     * クイックソートを実行します。
     * 
     * @param arr  ソート対象の配列
     * @param low  ソート範囲の最小インデックス
     * @param high ソート範囲の最大インデックス
     */
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);

            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    /**
     * ピボットを決定し、配列を分割します。
     * 
     * @param arr  分割対象の配列
     * @param low  分割範囲の最小インデックス
     * @param high 分割範囲の最大インデックス
     * @return ピボットの最終的なインデックス
     */
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);
        return i + 1;
    }

    /**
     * 2つの要素を交換します。
     * 
     * @param arr 配列
     * @param i   要素1のインデックス
     * @param j   要素2のインデックス
     */
    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    /**
     * 配列の要素を表示します。
     * 
     * @param arr 配列
     */
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
