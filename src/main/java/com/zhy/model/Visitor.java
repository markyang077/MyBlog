package com.zhy.model;

import lombok.Data;

/**
 * @author: zhangocean
 * @Date: 2018/6/16 16:03
 * Describe: 访客
 */
@Data
public class Visitor {

    private int id;

    /**
     * 访客人数
     */
    private long visitorNum;

    /**
     * 当前页的name or 文章名
     */
    private String pageName;

    public Visitor() {
    }

    public Visitor(int id, long visitorNum, String pageName) {
        this.id = id;
        this.visitorNum = visitorNum;
        this.pageName = pageName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getVisitorNum() {
        return visitorNum;
    }

    public void setVisitorNum(long visitorNum) {
        this.visitorNum = visitorNum;
    }

    public String getPageName() {
        return pageName;
    }

    public void setPageName(String pageName) {
        this.pageName = pageName;
    }

    @Override
    public String toString() {
        return "Visitor{" +
                "id=" + id +
                ", visitorNum=" + visitorNum +
                ", pageName='" + pageName + '\'' +
                '}';
    }
}
