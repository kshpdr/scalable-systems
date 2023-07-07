-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clusters`
--

DROP TABLE IF EXISTS `clusters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clusters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `powerHigh` float DEFAULT NULL,
  `powerAverage` float DEFAULT NULL,
  `powerLow` float DEFAULT NULL,
  `energyConsumption` float DEFAULT NULL,
  `numServers` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `numCores` int DEFAULT NULL,
  `numTBsRam` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clusters`
--

LOCK TABLES `clusters` WRITE;
/*!40000 ALTER TABLE `clusters` DISABLE KEYS */;
INSERT INTO `clusters` VALUES (1,'cluster 1',0,0,0,0,20,"",'North Scotland',0,0),(2,'cluster 2',0,0,0,0,20,"",'South Scotland', 0,0),(3,'cluster 3',0,0,0,0,20, "","North West England",0,0),(4,'cluster 4',0,0,0,0,20, "","North East England",0,0),(5,'cluster 5',0,0,0,0,20, "","Yorkshire",0,0),(6,'cluster 6',0,0,0,0,20, "","North Wales",0,0),(7,'cluster 7',0,0,0,0,20,"", "South Wales",0,0),(8,'cluster 8',0,0,0,0,20,"","West Midlands",0,0),(9,'cluster 9',0,0,0,0,20, "","East Midlands",0,0),(10,'cluster 10',0,0,0,0,20, "", "East England",0,0),(11,'cluster 11',0,0,0,0,20, '','South West England',0,0),(12,'cluster 12',0,0,0,0,20, "", "South England",0,0),(13,'cluster 13',0,0,0,0,20,"","London",0,0),(14,'cluster 14',0,0,0,0,20,"","South East England",0,0);
/*!40000 ALTER TABLE `clusters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30 17:10:41
