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

        //1.��ѯ����user��ǩ
        List<JXNode> jxNodes = jxDocument.selN("//user");
        for (JXNode jxNode : jxNodes) {
            System.out.println(jxNode);
        }
        System.out.println("-------------------");

        //2.��ѯ����user��ǩ�µ�name��ǩ
        List<JXNode> jxNodes2 = jxDocument.selN("//user/name");
        for (JXNode jxNode : jxNodes2) {
            System.out.println(jxNode);
        }
        System.out.println("-------------------");

        //3.��ѯ��ѯ����user��ǩ�µĴ���id���Եı�ǩ
        List<JXNode> jxNodes3 = jxDocument.selN("//user/name[@id]");
        for (JXNode jxNode : jxNodes3) {
            System.out.println(jxNode);
        }
        System.out.println("-------------------");

        //4.��ѯ��ѯ����user��ǩ�µĴ���id='440'���Եı�ǩ
        List<JXNode> jxNodes4 = jxDocument.selN("//user/name[@id='440']");
        for (JXNode jxNode : jxNodes4) {
            System.out.println(jxNode);
        }
        System.out.println("-------------------");
    }
}
