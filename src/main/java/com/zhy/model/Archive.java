package com.zhy.model;

import lombok.Data;

/**
 * @author: zhangocean
 * @Date: 2018/7/18 11:52
 * Describe: 文章归档
 */
@Data
public class Archive {

    private int id;

    /**
     * 归档日期
     */
    private String archiveName;

    public Archive() {
    }

    @Override
    public String toString() {
        return "Archive{" +
                "id=" + id +
                ", archiveName='" + archiveName + '\'' +
                '}';
    }

    public Archive(int id, String archiveName) {
        this.id = id;
        this.archiveName = archiveName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getArchiveName() {
        return archiveName;
    }

    public void setArchiveName(String archiveName) {
        this.archiveName = archiveName;
    }
}
