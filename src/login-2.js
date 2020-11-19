import React from "react";
import { Card, Form, Input, Button } from "antd";
const FormItem = Form.Item;
export default ()=>{

    const onFinish = (values)=>{
        console.log(values);
    }

    const onFinishFailed = (errorInfo)=>{
        console.log('errorInfo:'+errorInfo);
    }

    return (
        <div>
            <Card title="登录行内表单">
                <Form 
                    layout="inline"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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