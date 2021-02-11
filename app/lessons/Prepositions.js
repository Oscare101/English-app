import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from './S'
import color from '../components/color'

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Dependent Prepositions</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.title}>
            <Text style={S.h2}>Dependence</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              I <Text style={styles.textHint}>agree with</Text> my boss{' '}
              <Text style={styles.textHint}>about</Text> the problem {'\n'}
              Then don't <Text style={styles.textHint}>argue with</Text> me{' '}
              <Text style={styles.textHint}>about</Text> this {'\n'}
              She's <Text style={styles.textHint}>angry with</Text> her boss{' '}
              <Text style={styles.textHint}>about</Text> her salary{'\n'}
              We <Text style={styles.textHint}>arrive at</Text> the airport
              (place) at 6 am {'\n'}
              We <Text style={styles.textHint}>arrive in</Text> Paris
              (city/country) ain the evening{'\n'}I know you{' '}
              <Text style={styles.textHint}>dream of</Text> leaving (dream,
              imagine){'\n'}I still{' '}
              <Text style={styles.textHint}>dream about</Text> that picture book
              (dreams during sleep)
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={S.h2}>To</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              That bag <Text style={styles.textHint}>belong to </Text>
              me
              {'\n'}I am{' '}
              <Text style={styles.textHint}>looking forward to </Text>
              my holliday {'\n'}I <Text style={styles.textHint}>prefer </Text>{' '}
              taking the train <Text style={styles.textHint}>to</Text> flying{' '}
              {'\n'}
              Don't be <Text style={styles.textHint}>rude to</Text> him {'\n'}
              They were very <Text style={styles.textHint}>kind to</Text> me
              {'\n'}
              Very <Text style={styles.textHint}>close to</Text> where we passed
              {'\n'}
              You're <Text style={styles.textHint}>married to</Text> someone?
              {'\n'}
              That must <Text style={styles.textHint}>refer to</Text> the
              creatures we saw{'\n'}
              Computer should <Text style={styles.textHint}>
                respond to
              </Text>{' '}
              keyboard input{'\n'}
              They can't actually <Text style={styles.textHint}>
                expect to
              </Text>{' '}
              win{'\n'}I shall <Text style={styles.textHint}>attend to</Text>{' '}
              the matter, sir{'\n'}
              Our situation is <Text style={styles.textHint}>
                similar to
              </Text>{' '}
              theirs{'\n'}
              They were therefore{' '}
              <Text style={styles.textHint}>opposed to</Text> the proposal{'\n'}
              And <Text style={styles.textHint}>according to</Text> this report
              filed two days ago...{'\n'}
              You know, my <Text style={styles.textHint}>attitude to</Text>{' '}
              money is...
              {/* <Text style={styles.textHint}></Text> */}
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={S.h2}>For</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              He <Text style={styles.textHint}>appologized for</Text> being late
              {'\n'}
              I'll <Text style={styles.textHint}>pay for</Text> it{'\n'}
              We all <Text style={styles.textHint}>posed for</Text> a photograph{' '}
              {'\n'}
              Are you <Text style={styles.textHint}>
                waiting for
              </Text> someone? {'\n'}
              Oxford is <Text style={styles.textHint}>famous for</Text> its
              university{'\n'}
              Vegetables are <Text style={styles.textHint}>good for</Text> you
              (someone) {'\n'}
              I'm <Text style={styles.textHint}>ready for</Text> a holiday{'\n'}
              He is <Text style={styles.textHint}>responsible for</Text> the
              sales team{'\n'}I <Text style={styles.textHint}>sorry for</Text>{' '}
              what I spoke
              {'\n'}
              The <Text style={styles.textHint}>demand for</Text> electricity is
              never ending{'\n'}
              It was the <Text style={styles.textHint}>reason for</Text> the
              polygraph{'\n'}I was unaware you had{' '}
              <Text style={styles.textHint}>taste for</Text> such exotic treats
              {'\n'}
              The process should <Text style={styles.textHint}>
                allow for
              </Text>{' '}
              consultations with them{'\n'}
              There's a bench warrant out for your{' '}
              <Text style={styles.textHint}>arrest for</Text> kiting checks
              {'\n'}
              And this isn't an <Text style={styles.textHint}>
                excuse for
              </Text>{' '}
              my behavior{'\n'}
              We have every <Text style={styles.textHint}>hope for</Text> your
              success{'\n'}I helped Simon{' '}
              <Text style={styles.textHint}>prepare for</Text> his journey{'\n'}
              Anyway hurry and <Text style={styles.textHint}>
                search for
              </Text>{' '}
              her
              {/* <Text style={styles.textHint}></Text> */}
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={S.h2}>In</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              They <Text style={styles.textHint}>succeeded in</Text> climbing
              the mountain{'\n'}I don't{' '}
              <Text style={styles.textHint}>believe in </Text>
              ghosts{'\n'}
              She is <Text style={styles.textHint}>interested in</Text> French
              literature{'\n'}
              The <Text style={styles.textHint}>delay in</Text> reporting
              averaged six to nine months{'\n'}
              Table II. shows the{' '}
              <Text style={styles.textHint}>decrease in</Text> first-time
              approvals{'\n'}
              He noted a small <Text style={styles.textHint}>
                increase in
              </Text>{' '}
              technical cooperation expenditure
              {'\n'}
              There’s been a <Text style={styles.textHint}>fall in</Text> the
              value of the euro and the pound{'\n'}
              They can <Text style={styles.textHint}>participate in</Text> the
              local interpretation of international standards{'\n'}
              This may <Text style={styles.textHint}>result in</Text> commercial
              competition going to Mars
              {/* <Text style={styles.textHint}></Text> */}
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={S.h2}>At</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              They <Text style={styles.textHint}>laughed at</Text> me when I
              fell overflow{'\n'}
              She <Text style={styles.textHint}>smiled at</Text> me{'\n'}
              He is <Text style={styles.textHint}>good/bad at</Text> remembering
              names{'\n'}I was{' '}
              <Text style={styles.textHint}>astonished at</Text> the extent of
              his reputation{'\n'}I guess we shouldn't{' '}
              <Text style={styles.textHint}>laugh at</Text> him{'\n'}
              You can <Text style={styles.textHint}>stare at</Text> the ocean a
              little longer
              {/* <Text style={styles.textHint}></Text> */}
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={S.h2}>With</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              She <Text style={styles.textHint}>shared</Text> her sweets{' '}
              <Text style={styles.textHint}>with</Text> my son{'\n'}
              I'm really <Text style={styles.textHint}>
                desappointed with
              </Text>{' '}
              these photos{'\n'}
              I'm <Text style={styles.textHint}>fed up with</Text> waiting.
              Let's go{'\n'}
              I'm <Text style={styles.textHint}>pleased with</Text> my progress
              {'\n'}
              Ben was pretty <Text style={styles.textHint}>
                popular with
              </Text>{' '}
              his class{'\n'}I was{' '}
              <Text style={styles.textHint}>satisfied with</Text> the results{' '}
              {'\n'}
              We've had a lot of{' '}
              <Text style={styles.textHint}>trouble with</Text> headmaster{'\n'}
              It can't <Text style={styles.textHint}>compare with</Text> your
              grandmother's cassoulet{'\n'}
              Everyone must <Text style={styles.textHint}>
                comply with
              </Text>{' '}
              their accountability and punishment obligations{'\n'}
              How you <Text style={styles.textHint}>deal with</Text> this will
              define your career
              {/* <Text style={styles.textHint}></Text> */}
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={S.h2}>About</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              I <Text style={styles.textHint}>dreamt about</Text> my grandfather
              last night{'\n'}
              Din't <Text style={styles.textHint}>worry about</Text> it, it's
              not a problem{'\n'}
              She's <Text style={styles.textHint}>excited about</Text> her new
              job{'\n'}
              We're <Text style={styles.textHint}>sorry about</Text> what
              happened{'\n'}
              Surely he'll be <Text style={styles.textHint}>
                anxious about
              </Text>{' '}
              you{'\n'}I think he's{' '}
              <Text style={styles.textHint}>crazy about</Text> you{'\n'}
              At least you know she's{' '}
              <Text style={styles.textHint}>serious about</Text> you{'\n'}
              We need to be <Text style={styles.textHint}>
                vigilant about
              </Text>{' '}
              these activities{'\n'}
              General <Text style={styles.textHint}>
                information about
              </Text>{' '}
              system and compendium user's guide{'\n'}
              It is not an achievement that we can{' '}
              <Text style={styles.textHint}>boast about</Text>
              {'\n'}I hate to{' '}
              <Text style={styles.textHint}>complain about</Text> the heat, but
              the air conditioner's on fire
              {/* <Text style={styles.textHint}></Text> */}
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={S.h2}>Of</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              He <Text style={styles.textHint}>reminds</Text> me{' '}
              <Text style={styles.textHint}>of</Text> an old school friend{'\n'}
              He's <Text style={styles.textHint}>fond of</Text> his teacher
              {'\n'}
              I'm{' '}
              <Text style={styles.textHint}>
                frightened/afraid/scared of
              </Text>{' '}
              snakes{'\n'}
              I'm <Text style={styles.textHint}>proud of</Text> my children
              {'\n'}
              They're <Text style={styles.textHint}>tired of</Text> working
              every day{'\n'}I wasn't{' '}
              <Text style={styles.textHint}>aware of</Text> any conflict{'\n'}
              But I am fully <Text style={styles.textHint}>
                capable of
              </Text>{' '}
              multitasking{'\n'}
              I'm <Text style={styles.textHint}>envious of</Text> the bond you
              had{'\n'}
              We're both <Text style={styles.textHint}>guilty of</Text> keeping
              secrets{'\n'}
              I'm <Text style={styles.textHint}>sick of</Text> lying to everyone
              {'\n'}
              The main problem remained the{' '}
              <Text style={styles.textHint}>lack of</Text> information
              {/* <Text style={styles.textHint}></Text> */}
            </Text>
          </View>
        </View>

        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const Prepositions = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [like, setLike] = useState(false)
  const [repeat, setRepeat] = useState(false)

  let logoLike, colorRepeat
  if (like) {
    logoLike = 'heart'
  } else {
    logoLike = 'heart-outline'
  }
  if (repeat) {
    colorRepeat = 'red'
  } else {
    colorRepeat = 'black'
  }
  return (
    <View>
      <Modal visible={modalVisible} animationType="slide">
        <Lesson />
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={S.close}
        >
          <Ionicons name="close-outline" size={40} color={'white'} />
        </TouchableOpacity>
      </Modal>
      <View style={S.block}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={S.blockLesson}
        >
          <Text style={S.firstTitle}>Dependent Prepositions</Text>
        </TouchableOpacity>
        <View style={S.like}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <Ionicons name={logoLike} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRepeat(!repeat)}>
            <Ionicons name="repeat-outline" size={30} color={colorRepeat} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.examplesTitle,
  },
  block: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: color.hintBlock,
  },
  hint: {
    backgroundColor: color.exampleHint,
    borderRadius: 7,
    alignSelf: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textHint: {
    textShadowColor: '#B9EA00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    color: '#489C00',
    // textDecorationStyle: 'solid',
    // textDecorationLine: 'underline',
    // textDecorationColor: 'red',
  },
})

export default Prepositions
