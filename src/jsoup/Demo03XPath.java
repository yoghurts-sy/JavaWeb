package jsoup;

import cn.wanghaomiao.xpath.exception.XpathSyntaxErrorException;
import cn.wanghaomiao.xpath.model.JXDocument;
import cn.wanghaomiao.xpath.model.JXNode;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class Demo03XPath {
    public static void main(String[] args) throws IOException, XpathSyntaxErrorException {
        String path = Demo01HelloJsoup.class.getClassLoader().getResource("students.xml").getPath();
        Document document = Jsoup.parse(new File(path), "UTF-8");

        JXDocument jxDocument = new JXDocument(document);

        //1.查询所有user标签
        List<JXNode> jxNodes = jxDocument.selN("//user");
        for (JXNode jxNode : jxNodes) {
            System.out.println(jxNode);
        }
        System.out.println("-------------------");

        //2.查询所有user标签下的name标签
        List<JXNode> jxNodes2 = jxDocument.selN("//user/name");
        for (JXNode jxNode : jxNodes2) {
            System.out.println(jxNode);
        }
        System.out.println("-------------------");

        //3.查询查询所有user标签下的带有id属性的标签
        List<JXNode> jxNodes3 = jxDocument.selN("//user/name[@id]");
        for (JXNode jxNode : jxNodes3) {
            System.out.println(jxNode);
        }
        System.out.println("-------------------");

        //4.查询查询所有user标签下的带有id='440'属性的标签
        List<JXNode> jxNodes4 = jxDocument.selN("//user/name[@id='440']");
        for (JXNode jxNode : jxNodes4) {
            System.out.println(jxNode);
        }
        System.out.println("-------------------");
    }
}
