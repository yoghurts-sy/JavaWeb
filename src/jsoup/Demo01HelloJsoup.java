package jsoup;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;
import java.net.URL;

public class Demo01HelloJsoup {
    public static void main(String[] args) throws IOException {
        /*获取Document对象，根据xml文档读取*/
        String path = Demo01HelloJsoup.class.getClassLoader().getResource("students.xml").getPath();
        Document document = Jsoup.parse(new File(path), "UTF-8");
        Elements elements = document.getElementsByTag("name");

        Element element = elements.get(1);
        System.out.println(element.text());

        /*网络获取*/
        URL url = new URL("https://www.bilibili.com/");
        Document document1 = Jsoup.parse(url, 10000);
        System.out.println(document1);

        System.out.println("--------------------------");
        Element student = document.getElementsByTag("user").get(0);
        System.out.println(student.attr("number"));

        System.out.println(student.text());
        System.out.println(student.html());

    }
}
