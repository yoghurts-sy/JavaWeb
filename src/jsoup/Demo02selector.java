package jsoup;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;

public class Demo02selector {
    public static void main(String[] args) throws IOException {
        String path = Demo01HelloJsoup.class.getClassLoader().getResource("students.xml").getPath();
        Document document = Jsoup.parse(new File(path), "UTF-8");

        /*��ȡ������ΪnameԪ�ض��󼯺�*/
        Elements elements = document.select("name");
        System.out.println(elements);
        System.out.println("-------------------");
        //����id
        Elements elements1 = document.select("#1");
        System.out.println(elements1);
        System.out.println("-------------------");
        //��ȡstudent��ǩ����number����ֵΪxdu_001��ǩ
        Elements elements2 = document.select("user[number='xdu_001']");
        System.out.println(elements2);
        System.out.println("-------------------");

        //��ȡstudent��ǩ����number����ֵΪxdu_001��age��ǩ
        Elements elements3 = document.select("user[number='xdu_001'] > age");
        System.out.println(elements3);
        System.out.println("-------------------");

    }
}
