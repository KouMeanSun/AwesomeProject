/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TextInput,
    ScrollView,
    ListView
} from 'react-native';

//问候语组件
class Greeting extends  Component{

    render(){
        return (
            <Text>Hello {this.props.name}</Text>
        );
    }

}
//闪图组件
class  Blink extends  Component {
    constructor(props){
        super(props);
        this.state = {showText:true};

        //每 1000 毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText:!previousState.showText};
            });
        },1000)
    }

    render() {
        //根据showText属性值决定是否显示text内容
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text >{display}</Text>
        );
    }
}
//多样式
class  LostsOfStyles extends  Component {
    render(){
        return (
            <View >
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue}>just bigblue</Text>
                <Text style={[styles.bigBlue,styles.red ]}>bigblue, then red</Text>
                <Text style={[styles.red,styles.bigBlue]}>red, then bigblue</Text>
            </View>
        );

    }

}
//指定宽高
class  FixedDimesionsBasics extends  Component {
    render() {
        return (
            <View>
            <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
            <View style={{width:100,height:100,backgroundColor:'skyblue'}}></View>
            <View style={{width:150,height:150,backgroundColor:'skyblue'}}></View>

            </View>

        );
    }

}
//弹性（Flex）宽高
class  FlexDimensionsBasics extends  Component {
    render(){

        return(
            <View style={{width:200,height:200}}>
                <View style={{flex: 1, backgroundColor: 'red'}} ></View>
                <View style={{flex: 2, backgroundColor: 'blue'}} ></View>
                <View style={{flex: 3, backgroundColor: 'green'}} ></View>
            </View>
        );
    }
}

//布局方向
class  FlexDirectionBasics extends  Component {
    render(){
        return(
            // 尝试把`flexDirection`改为`column`看看，'row'
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}
//自动适配内容区域
// 在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
class JustifyContentBasics extends Component {
    render() {
        return (
            // 尝试把`justifyContent`改为`center`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};

// Align Items

// 在组件的style中指定alignItems可以决定其子元素沿着次轴
// （与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
// 子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？
// 对应的这些可选项有：flex-start、center、flex-end以及stretch。

class AlignItemsBasics extends Component {
    render() {
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};
// TextInput是一个允许用户输入文本的基础组件。
// 它有一个名为onChangeText的属性，此属性接受一个函数，
// 而此函数会在文本变化时被调用。
// 另外还有一个名为onSubmitEditing的属性，会在文本被提交后（用户按下软键盘上的提交键）调用。
class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40,width:200,backgroundColor:'gray'}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '披萨').join(' ')}
                </Text>
            </View>
        );
    }
}
// ScrollView是一个通用的可滚动的容器，
// 你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的。
// ScrollView不仅可以垂直滚动，还能水平滚动（通过horizontal属性来设置）。

class  ScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Image source={require('./img/wk-logo.jpg')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}

// ListView组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同。
//
// ListView更适于长列表数据，且元素个数可以增删。和ScrollView不同的是，ListView并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。
//
// ListView组件必须的两个属性是dataSource和renderRow。dataSource是列表的数据源，而renderRow则逐个解析数据源中的数据，然后返回一个设定好格式的组件来渲染。
//
// 下面的例子创建了一个简单的ListView，并预设了一些模拟数据。首先是初始化ListView所需的dataSource，其中的每一项（行）数据之后都在renderRow中被渲染成了Text组件，最后构成整个ListView。
//
// rowHasChanged函数也是ListView的必需属性。这里我们只是简单的比较两行数据是否是同一个数据（===符号只比较基本类型数据的值，和引用类型的地址）来判断某行数据是否变化了


class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}


class  MyListView extends  Component {
    constructor(props){
        super(props);
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        fetch("https://facebook.github.io/react-native/movies.json")
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}</Text>}
                />
            </View>
        );
    }

}

export default class AwesomeProject extends Component {
  render() {
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
    return (
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>*/}
          {/*Welcome to React Native!*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*To get started, edit index.ios.js*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*Press Cmd+R to reload,{'\n'}*/}
          {/*Cmd+D or shake for dev menu*/}
        {/*</Text>*/}
        {/*<Text  style={styles.custom}>*/}
          {/*高明阳测试*/}
        {/*</Text>*/}
          {/*<Image source={pic} style={{width: 193, height: 110}} />*/}
          {/*<Greeting name="Rexxa"/>*/}
          {/*<Greeting name="Jaina"/>*/}
          {/*<Greeting  name ="Vallea"/>*/}
          {/*<Blink text="I love blink"/>*/}
          {/*<Blink text="Yes blink is so easy"/>*/}
          {/*<Blink text="So good"/>*/}
          {/*<LostsOfStyles/>*/}
          {/*<FixedDimesionsBasics/>*/}

          {/*<FlexDimensionsBasics />*/}
          {/*<FlexDirectionBasics />*/}
          {/*<JustifyContentBasics />*/}

          {/*<AlignItemsBasics />*/}
          {/*<PizzaTranslator />*/}
          {/*<ScrolledDownAndWhatHappenedNextShockedMe />*/}
          {/*<ListViewBasics />*/}

          <MyListView />

      </View>


    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign:'center',
    color: '#333333',
    marginBottom: 5,
  },
    custom:{
        fontSize: 30,
        textAlign:'right',
        color:'red',
        marginRight:5,

    },
    bigBlue:{
      color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
      color:'red'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
