class psp
{
cdncjdcvhj
}����   4 I
  # $ % &
  ' ( )
  * +
  ,
  -
  .
  /	 0 1 2
 3 4 5
 3 6 7 8 <init> ()V Code LineNumberTable main ([Ljava/lang/String;)V StackMapTable 9 $ ( : 5 
SourceFile compiler.java   java/lang/ProcessBuilder java/lang/String javac  //package com.tr.projects.OnlineCompiler.backend;

import java.io.*;

class Compiler
{
public static void main(String a[])
{
try
{
ProcessBuilder processBuilder=new ProcessBuilder("javac",a[0]);

File errorFile=new File("error.txt");
File outputFile=new File("output.txt");

processBuilder.redirectError(errorFile);
processBuilder.redirectOutput(outputFile);

Process process=processBuilder.start();





}catch(Exception exception)
{
System.out.println(exception);
}
}

}abcd.java:3: error: <identifier> expected
cdncjdcvhj
          ^
abcd.java:4: error: reached end of file while parsing
}
 ^
2 errors
Compiled from "Process.java"
public abstract class java.lang.Process {
  public java.lang.Process();
  public abstract java.io.OutputStream getOutputStream();
  public abstract java.io.InputStream getInputStream();
  public abstract java.io.InputStream getErrorStream();
  public abstract int waitFor() throws java.lang.InterruptedException;
  public boolean waitFor(long, java.util.concurrent.TimeUnit) throws java.lang.InterruptedException;
  public abstract int exitValue();
  public abstract void destroy();
  public java.lang.Process destroyForcibly();
  public boolean isAlive();
}
