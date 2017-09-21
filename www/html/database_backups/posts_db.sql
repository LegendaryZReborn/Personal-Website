-- MySQL dump 10.16  Distrib 10.1.24-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: posts
-- ------------------------------------------------------
-- Server version	10.1.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogposts`
--

DROP TABLE IF EXISTS `blogposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogposts` (
  `title` char(128) DEFAULT NULL,
  `author` char(128) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `post` longtext,
  FULLTEXT KEY `post` (`post`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogposts`
--

LOCK TABLES `blogposts` WRITE;
/*!40000 ALTER TABLE `blogposts` DISABLE KEYS */;
INSERT INTO `blogposts` VALUES ('Why is Beerus so much stronger than Goku?!','Cavaughn Browne','2017-08-22 15:05:11','	If you are adding values for all the columns of the table, you\r\n	do not need to specify the column names in the SQL query. However,\r\n	make sure the order of the values is in the same order as the columns\r\n	in the table. The INSERT INTO syntax would be as follows:'),('Why is Beerus so much stronger than Goku?!','Cavaughn Browne','2017-08-22 15:20:52','	If you are adding values for all the columns of the table, you\r\n	do not need to specify the column names in the SQL query. However,\r\n	make sure the order of the values is in the same order as the columns\r\n	in the table. The INSERT INTO syntax would be as follows:'),('Why is Beerus so much stronger than Goku?!','Cavaughn Browne','2017-08-22 15:29:26','	If you are adding values for all the columns of the table, you\r\n	do not need to specify the column names in the SQL query. However,\r\n	make sure the order of the values is in the same order as the columns\r\n	in the table. The INSERT INTO syntax would be as follows:'),('Why is Beerus so much stronger than Goku?!','Cavaughn Browne','2017-08-22 15:41:18','	If you are adding values for all the columns of the table, you\r\n	do not need to specify the column names in the SQL query. However,\r\n	make sure the order of the values is in the same order as the columns\r\n	in the table. The INSERT INTO syntax would be as follows:'),('NEW POST','CAVAUGHN BROWNE','2017-08-22 15:53:05','The isset () function is used to check whether a variable is set or not. If a variable is already unset with unset() function, it will no longer be set. The isset() function return false if testing variable contains a NULL value.'),('WHY DOES VEGETA ALWAYS GET BODIED','CAVAUGHN BROWNE','2017-08-23 08:31:09','Fine, Kakarot, you are the mightiest Saiyan, Ive admitted that much. At least for now. But dont you dare think that this is over. I wont let you keep me in second place forever, feeding on the scraps of your glory. I will surpass you, and even then Ill keep pushing, Ill surpass every single warrior in the Universe. I wont stop until Im the ultimate number one. \"\r\nâ€” To the Promised Resort! Vegeta Takes a Family Trip!'),('','','2017-08-23 08:39:19',''),('WHY DOES VEGETA ALWAYS GET BODIED VERSION 2?!!!','CAVAUGHN BROWNE SUPREME','2017-08-23 08:41:56','\"Fine, Kakarot, you are the mightiest Saiyan, I\'ve admitted that much. At least for now. But don\'t you dare think that this is over. I won\'t let you keep me in second place forever, feeding on the scraps of your glory. I will surpass you, and even then I\'ll keep pushing, I\'ll surpass every single warrior in the Universe. I won\'t stop until I\'m the ultimate number one. \"\r\nâ€” To the Promised Resort! Vegeta Takes a Family Trip!'),('WHY DO WEABOO IDIOTS THINK BLUE IS AS STRONG AS SSJ3','AKIRA TORIYAMA','2017-08-23 08:44:05','In the anime, With the Time Machine fixed Goku, Future Trunks and Vegeta go to the Future. When they arrive Vegeta and Goku are shocked about all the wreckage and Future Trunks discovers Future Mai\'s hat. Vegeta follows Future Trunks and Goku is shot at by the resistance who think Goku is Black. After the misidentification is resolved, Vegeta meets Future Mai and other survivors of the conflict. Vegeta is successful in securing the right to fight Black first and begins battling him when he appears before the group, Vegeta powers straight up to Super Saiyan Blue and is congratulated by Black on reaching the level of gods. Black suddenly moves in faster then Vegeta can react and puts his finger under his chin to show off his speed. Vegeta now attacks with numerous punches but after a few moments suddenly stops and jumps back, questioning what he just felt. Black emerges from the crater unharmed and kicks Vegeta away and then Black transforms into a Super Saiyan Rose. Vegeta moves back into attack but to no avail as Black is able to avoid the hits and lands a hard shot of his own to Vegeta, calling the Saiyan prince only a warm up and goes to land a massive shot which is caught by Vegeta who then deflects the blow and responds with another barrage of punches and goes for a massive punch when suddenly Black catches him and everyone off guard by transforming his aura into a blade and stabbing Vegeta clean through the right side of his chest, mortally wounding him. Vegeta is shocked at how even as a Super Saiyan Blue he is considered a \"warm-up\" to Black, and he falls to the ground in a near-death state. Vegeta is unconscious throughout the entire fight between Goku, Future Trunks, Black and Future Zamasu, only waking up to witness Future Zamasu\'s appearance and waking up once again to save Goku and Future Trunks from being killed by the two evil entity\'s combined attack, falling '),('dfasgdfas','','2017-08-23 09:16:50',''),('WHY IS THIS BITCH ASS PUNK ASS NIGGA WHO LOOKS LIKE KIRITO SO OP?!!','SHITTY CHINESE CARTOON LIGHT NOVELIST','2017-08-23 22:51:35','â€œNation of Beastmen, and an Observerâ€\r\nTouya\'s party heads out for Mismede once more. Then they finally arrive in Mismede\'s royal capital, Berge. Their party heads to the palace and gains audience with King Jamukha. Then somehow Touya and the King end up doing battle in their fighting arena?! That night a party is held in the royal palace, but a moving stuffed teddy bear appears before Touya when he sneaks out of the reception! The bear leads him to the self-proclaimed 612 year old fairy leader, Leen. Then Touya uses his newly obtained Null magic, Program, to create the handgun Brunhild, and grow even more powerful! '),('RANDOM TITLE BECAUSE I RAN OUT OF IDEAS?!!','Needshelp Johnson','2017-08-23 22:53:38','exactly why a gun hes making this better world into his old world whats even the point of this world if hes going to make it all modern'),('WHY IS ANTHONY SUCH A FREAKING LEFTIST CUCK?!!','SHINGAI','2017-08-24 23:42:10','How can the arranged bat crawl? A timetable discriminates on top of the exposure. An exploding swamp flies above the noun. His future congratulates the scream. A lion shoots the environmental fiddle. How can the cream tear?');
/*!40000 ALTER TABLE `blogposts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-05 16:27:06
