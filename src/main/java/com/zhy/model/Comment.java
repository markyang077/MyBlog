package com.zhy.model;

import lombok.Data;

/**
 * @author: zhangocean
 * @Date: 2018/7/5 22:37
 * Describe: 文章评论
 */
@Data
public class Comment {

    private long id;

    /**
     * 留言的文章id
     */
    private long articleId;

    /**
     * 留言的文章的原作者
     */
    private String originalAuthor;

    /**
     * 回复的父id 若是评论则为 0，则是评论中的回复则为对应评论的id
     */
    private long pId=0;

    /**
     * 评论者
     */
    private int answererId;

    /**
     * 被回复者
     */
    private int respondentId;

    /**
     * 评论日期
     */
    private String commentDate;

    /**
     * 喜欢数
     */
    private int likes=0;

    /**
     * 评论内容
     */
    private String commentContent;

    public Comment() {
    }

    public Comment(long id, long articleId, String originalAuthor, long pId, int answererId, int respondentId, String commentDate, int likes, String commentContent) {
        this.id = id;
        this.articleId = articleId;
        this.originalAuthor = originalAuthor;
        this.pId = pId;
        this.answererId = answererId;
        this.respondentId = respondentId;
        this.commentDate = commentDate;
        this.likes = likes;
        this.commentContent = commentContent;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getArticleId() {
        return articleId;
    }

    public void setArticleId(long articleId) {
        this.articleId = articleId;
    }

    public String getOriginalAuthor() {
        return originalAuthor;
    }

    public void setOriginalAuthor(String originalAuthor) {
        this.originalAuthor = originalAuthor;
    }

    public long getpId() {
        return pId;
    }

    public void setpId(long pId) {
        this.pId = pId;
    }

    public int getAnswererId() {
        return answererId;
    }

    public void setAnswererId(int answererId) {
        this.answererId = answererId;
    }

    public int getRespondentId() {
        return respondentId;
    }

    public void setRespondentId(int respondentId) {
        this.respondentId = respondentId;
    }

    public String getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(String commentDate) {
        this.commentDate = commentDate;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", articleId=" + articleId +
                ", originalAuthor='" + originalAuthor + '\'' +
                ", pId=" + pId +
                ", answererId=" + answererId +
                ", respondentId=" + respondentId +
                ", commentDate='" + commentDate + '\'' +
                ", likes=" + likes +
                ", commentContent='" + commentContent + '\'' +
                '}';
    }
}
