import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { getOnlyTeacher } from "@redux/actions/publick";
import { whoAmI } from "@redux/actions/users";
import { PageHeader, Divider, Input, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import photoTest from '@assets/images/dark4.jpg';
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import style from "./style.module.scss";

const TeacherPage = (props) => {
  const { id } = useParams();
  const history = useHistory();
  let dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(getOnlyTeacher(id)), []);
  const response = useSelector((store) => store.publick.onlyTeacher);
  const isLoading = useSelector((store) => store.publick.isDataLoading);
  console.log(
    "------------------------------------------------------------------------------"
  );
  console.log(response);
  console.log(isLoading);
  const routes = [
    {
      path: "stuff",
      breadcrumbName: "состав",
    },
    {
      path: "first",
      breadcrumbName: `преподаватель - ${id}`,
    },
  ];
  const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={`/${route.path}`} replace>
        {route.breadcrumbName}
      </Link>
    );
  };
  const config = {
    action: "localhost:8020",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        // console.log(file, fileList);
      }
    },
  };
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  // console.log(process.env.NODE_ENV);  !!!!!!!!!!!!!!!
  let getInfo = (values) => {
    console.log(values);
    if (values.input && values.upload !== undefined) {
      message.success("Файлы и описание приняты!");
    }
  };
  return (
    <div className={style.main}>
      <PageHeader
        className={style.sitePageHeader}
        onBack={() => history.goBack()} //useHistory => hook
        title="Личный профиль преподавателя"
        breadcrumb={{ routes, itemRender }}
        subTitle="This is a subtitle"
      />
      <div className={style.container}>
        <div className={style.teacherDataContainer}>
          <img className={style.image} src={response.photo} alt="" />
          <div className={style.teacherDescription}>
            <span className={style.name}>{response.name}</span>
            <span className={style.rewards}>{response.description}</span>
            <Divider />
            <span className={style.contacts}>
              Контакты: {response.contacts}
            </span>
          </div>
        </div>
      </div>
      {isLoading ? null : (
        <React.Fragment>
          <Divider plain>Панель навигации</Divider>
          <Form className={style.form} onFinish={getInfo}>
            <FormItem name="input" className={style.input}>
              <Input placeholder="Добавьте описание"></Input>
            </FormItem>
            <div className={style.underInput}>
              <FormItem>
                <Button
                  className={style.applyButton}
                  type="primary"
                  htmlType="submit"
                >
                  Отправить
                </Button>
              </FormItem>
              <FormItem name="upload">
                <Upload
                  {...config}
                  className={style.upload}
                  maxCount="5"
                  multiple
                  customRequest={dummyRequest}
                >
                  <Button
                    className={style.uplButton}
                    type="default"
                    icon={<UploadOutlined />}
                  >
                    Загрузить файл
                  </Button>
                </Upload>
              </FormItem>
            </div>
          </Form>
        </React.Fragment>
      )}

      <Divider plain>Публикации преподавателя</Divider>
      <div>123</div>
    </div>
  );
};

export default TeacherPage;
