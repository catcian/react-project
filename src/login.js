import React from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
const FormItem = Form.Item;
export default class FormLogin extends React.Component{

    onFinish = (values)=>{
        console.log(values);
    }

    onFinishFailed = (errorInfo)=>{
        console.log('errorInfo:'+errorInfo);
    }

    render(){
        return (
            <div>
                <Card title="登录行内表单">
                    <Form 
                        layout="inline"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <FormItem
                            name="username"
                            rules={
                                [{
                                    required:true,
                                    message:'用户名不能为空'
                                }]
                            }
                        >
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem
                            name="password"
                        >
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}